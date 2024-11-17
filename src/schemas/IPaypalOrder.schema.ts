import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Definimos las interfaces para los tipos anidados
interface PaymentSource {
  email_address: string;
  account_id: string;
  account_status: string;
  name: {
    given_name: string;
    surname: string;
  };
  address: {
    country_code: string;
  };
}

interface PurchaseUnit {
  reference_id: string;
  shipping: {
    name: {
      full_name: string;
    };
    address: {
      address_line_1: string;
      admin_area_2: string;
      admin_area_1: string;
      postal_code: string;
      country_code: string;
    };
  };
  payments: {
    captures: [create_time: string, update_time: string];
  };
}

interface Payer {
  name: {
    given_name: string;
    surname: string;
  };
  email_address: string;
  payer_id: string;
  address: {
    country_code: string;
  };
}

@Schema({ timestamps: true })
export class PaypalOrder extends Document {
  @Prop({ unique: true })
  public id: string;

  @Prop()
  public status: string;

  @Prop({ type: Object })
  public payment_source: PaymentSource;

  @Prop({ type: Array })
  public purchase_units: PurchaseUnit[];

  @Prop({ type: Object })
  public payer: Payer;

  @Prop({ type: Array })
  public links: any[];

  @Prop()
  public suscripcionComprada: string;

  @Prop()
  public usuarioId: number;
}

export const PaypalOrderSchema = SchemaFactory.createForClass(PaypalOrder);
