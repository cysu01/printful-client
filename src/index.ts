import { RequestHelper } from "./RequestHelper";
import { Products } from "./modules/Products";
import { Shipping } from "./modules/Shipping";
import { Tax } from "./modules/Tax";
import { Orders } from "./modules/Orders";
import { Catalog } from "./modules/Catalog";
import { MockupGenerator } from "./modules/MockupGenerator";

class PrintfulClient {
  public products: Products;
  public shipping: Shipping;
  public tax: Tax;
  public orders: Orders;
  public catalog: Catalog;
  public mockupGenerator: MockupGenerator;

  /**
   *
   * @param apiToken Printful API Token
   * @param storeID Store ID, is not required unles using for one specific Store
   */
  constructor(apiToken: string, storeID?: string) {
    if (!apiToken) throw new Error("No API Provided");
    const requestHelper = new RequestHelper(apiToken, storeID);
    this.products = new Products(requestHelper);
    this.shipping = new Shipping(requestHelper);
    this.tax = new Tax(requestHelper);
    this.orders = new Orders(requestHelper);
    this.catalog = new Catalog(requestHelper);
    this.mockupGenerator = new MockupGenerator(requestHelper);
  }
}

export { PrintfulClient };
