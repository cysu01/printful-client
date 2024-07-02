import { PrintfulClient } from "../src/index";


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


const syncData: CreateProductObject = {
  "sync_product": {
    "name": "Bella + Canvas 3001 Unisex Short Sleeve Jersey T-Shirt",
    "thumbnail": "https://aisticker.s3.amazonaws.com/aiSticker/blob-1715739407856.jpg"
  },
  "sync_variants": [
    {
        "retail_price": 21.00,
        "variant_id": 4011,
        "files": [
            {
                "url": "https://aisticker.s3.amazonaws.com/aiSticker/blob-1715739407856.jpg"
            },
            {
                "type": "back",
                "url": "https://aisticker.s3.amazonaws.com/aiSticker/blob-1715739407856.jpg"
            }
        ]
    },
    {
        "retail_price": 21.00,
        "variant_id": 4012,
        "files": [
            {
                "url": "https://aisticker.s3.amazonaws.com/aiSticker/blob-1715739407856.jpg"
            },
            {
                "type": "back",
                "url": "https://aisticker.s3.amazonaws.com/aiSticker/blob-1715739407856.jpg"
            }
        ]
    },
    {
        "retail_price": 21.00,
        "variant_id": 4013,
        "files": [
            {
                "url": "https://aisticker.s3.amazonaws.com/aiSticker/blob-1715739407856.jpg"
            },
            {
                "type": "back",
                "url": "https://aisticker.s3.amazonaws.com/aiSticker/blob-1715739407856.jpg"
            }
        ]
    },
    {
        "retail_price": 21.00,
        "variant_id": 4014,
        "files": [
            {
                "url": "https://aisticker.s3.amazonaws.com/aiSticker/blob-1715739407856.jpg"
            },
            {
                "type": "back",
                "url": "https://aisticker.s3.amazonaws.com/aiSticker/blob-1715739407856.jpg"
            }
        ]
    }
]
};

const printful = new PrintfulClient("BomPPJkOwdYPzPJieG8OBGcPlgIblQ9O6a2FSWTx");

printful.products.create(syncData).then(
  (response: Response) => {
  response.json().then((value) => 
  {
    console.log(JSON.stringify(value));
  })});