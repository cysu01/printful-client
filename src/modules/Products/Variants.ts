/**
 * Printful Product Variant
 */
import { BaseModule } from "../BaseModule";
import { RequestHelper } from "../../RequestHelper";

class Variants extends BaseModule {
  constructor(requestHelper: RequestHelper) {
    super(requestHelper);
  }

  /**
   * Get Product Variant by ID
   * @param id Variant ID, See Printful API Documentation
   * @returns Response Object with Variant Information
   */
  get(id: string): Promise<Response> {
    return this._execute(`/store/variants/${id}`, {
      method: "Get",
    });
  }
    /**
   * Put Product Variant by ID
   * @param id Variant ID, See Printful API Documentation
   * @param modifiedVariantObject Modified Variant Object
   * @returns Response Object with Variant Information
   */
    put<T>(id: string, modifiedVariantObject: T): Promise<Response> {
      return this._execute(`/store/variants/${id}`, {
        body: JSON.stringify(modifiedVariantObject), 
        method: "Put",
      });
    }
}

export { Variants };
