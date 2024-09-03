import { ObjectType, Field, ID, Int } from '@nestjs/graphql';

import { CustomerGroup } from './customer-group';
import { PaymentMethod } from './payment-method';
import { Portfolio } from './portfolio';

@ObjectType()
class UpdateDate {
  @Field()
  date: string;
}

@ObjectType()
export class Client {
  @Field(() => ID)
  id: string;

  @Field()
  address: string;

  @Field()
  blocked: string;

  @Field()
  cellPhone: string;

  @Field()
  channel: string;

  @Field()
  clientId: string;

  @Field()
  country: string;

  @Field(() => CustomerGroup)
  customerGroup: CustomerGroup;

  @Field(() => Int)
  customerSchema: number;

  @Field()
  distrChan: string;

  @Field()
  division: string;

  @Field()
  fiscalCode1: string;

  @Field()
  fiscalCode2: string;

  @Field()
  frequency: boolean;

  @Field()
  frequencyDays: string;

  @Field()
  idPortfolio: string;

  @Field()
  immediateDelivery: boolean;

  @Field()
  industryCode: string;

  @Field()
  industryCode1: string;

  @Field()
  isEnrollment: boolean;

  @Field()
  name: string;

  @Field()
  name2: string;

  @Field()
  office: string;

  @Field()
  paymentCondition: string;

  @Field(() => [PaymentMethod])
  paymentMethods: PaymentMethod[];

  @Field(() => [Portfolio])
  portfolio: Portfolio[];

  @Field()
  priceGroup: string;

  @Field()
  priceList: string;

  @Field()
  routeId: string;

  @Field()
  salesOrg: string;

  @Field()
  supplyCenter: string;

  @Field(() => UpdateDate)
  updateDate: UpdateDate;

  @Field()
  vendorGroup: string;
}
