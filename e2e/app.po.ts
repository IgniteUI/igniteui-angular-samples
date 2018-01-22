// tslint:disable-next-line:no-implicit-dependencies
import { browser, by, element } from "protractor";

export class AppPage {
  public navigateTo() {
    return browser.get("/");
  }

  public getParagraphText() {
    return element(by.css("app-root h1")).getText();
  }
}
