/**
 * Printful Product
 */

import { BaseModule } from "../BaseModule";
import { Variants } from "./Variants";
import { RequestHelper } from "../../RequestHelper";

type ProductQuery = {
  offset?: string;
  limit?: string;
};

type SyncProduct = {
  external_id?: string;
  name: string;
  thumbnail?: string;
  is_ignored?: boolean;
};

type FileOptions = {
  id: string;
  value: string;
};

type File = {
  type?: string;
  url: string;
  options?: FileOptions[];
  filename?: string;
  visible?: boolean;
};

type VariantOptions = {
  id: string;
  value: string;
};

type SyncVariant = {
  external_id?: string;
  variant_id?: number;
  retail_price?: number; // If numerical value is expected, should be changed to 'number'
  is_ignored?: boolean;
  sku?: string;
  files: File[];
  options?: VariantOptions[];
  availability_status?: string; // If a set of known strings is used, use union types instead e.g., "active" | "inactive"
};

type CreateProductObject = {
  sync_product: SyncProduct;
  sync_variants: SyncVariant[];
};

class Products extends BaseModule {
  public variants: Variants;

  constructor(requestHelper: RequestHelper) {
    super(requestHelper);
    this.variants = new Variants(requestHelper);
  }

  get(id: string): Promise<Response> {
    //Get one Product
    return this._execute(`/store/products/${id}`, {
      method: "Get",
    });
  }

  getAll(productQuery?: ProductQuery): Promise<Response> {
    //Get all Products
    let path = `/store/products`;
    if (productQuery) {
      path += `?${new URLSearchParams(productQuery).toString()}`;
    }
    return this._execute(path, {
      method: "Get",
    });
  }

    /**
   * Create a product in Printful
   * @param createProduct Create Product object
   * @returns
   */
    create(createProductObject: CreateProductObject): Promise<Response> {
      //Get one Product
      return this._execute(`/store/products`, {
        body: JSON.stringify(createProductObject),
        method: "Post",
      });
    }
}

export { Products };
