import { AppPropsType, AppType } from "next/dist/shared/lib/utils";
import Document, { DocumentContext } from "next/document";
import { NextRouter } from "next/router";
import { PropsWithChildren } from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp:
            (App: AppType) =>
            (props: PropsWithChildren<AppPropsType<NextRouter, {}>>) =>
              sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
