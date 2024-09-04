import { Inject, Injectable } from '@nestjs/common';

import { Client, Item, Portfolio } from './graphql/models';
import { HTTP_ADAPTER } from './constants/injections.constants';
import { HttpAdapterPort } from './interfaces/http.port';
import { ResponseApi } from './interfaces/response.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject(HTTP_ADAPTER) private readonly httpAdapter: HttpAdapterPort,
  ) {}

  async getClient(id: string): Promise<ResponseApi<Client>> {
    return await this.httpAdapter.getClient(id);
  }

  async getClientPortfolio(clientId: string): Promise<Portfolio> {
    const data = await this.httpAdapter.getClientPortfolio(clientId);
    return this.mappedDataPortfolio(data);
  }

  async getPortfolioItems(
    portfolioId: string,
    pageSize: number,
    currentPage: number,
  ): Promise<Item[]> {
    const data = await this.httpAdapter.getPortfolioItems(
      portfolioId,
      pageSize,
      currentPage,
    );
    return data.map(item => this.mappedDataItem(item));
  }

  private mappedDataPortfolio(data: any): Portfolio {
    return {
      id: data?.ID,
      portfolioId: data?.PortfolioId,
      channel: data?.Channel,
      country: data?.Country,
      createdDate: data?.CreatedDate,
      customerCode: data?.CustomerCode,
    };
  }

  private mappedDataItem(data: any): Item {
    return {
      id: data?.ID,
      sku: data?.SKU,
      title: data?.Title,
      categoryId: data?.CategoryID,
      category: data?.Category,
      brand: data?.Brand,
      price: {
        fullPrice: data?.Price?.FullPrice,
        taxes: data?.Price?.Taxes?.map(tax => ({
          taxType: tax.TaxType,
          taxId: tax.TaxId,
          rate: tax.Rate,
        })),
      },
      classification: data?.Classification,
      unitsPerBox: data?.UnitsPerBox,
      minOrderUnits: data?.MinOrderUnits,
      packageDescription: data?.PackageDescription,
      packageUnitDescription: data?.PackageUnitDescription,
      quantity_max_redeem: data?.QuantityMaxRedeem,
      redeem_unit: data?.RedeemUnit,
      order_reason_redeem: data?.OrderReasonRedeem,
      sku_redeem: data?.SKURedeem,
      points: data?.Points,
    };
  }
}
