import {
  Controller,
  Get,
  Query,
  BadRequestException,
  Res,
  Param,
} from '@nestjs/common';
import { PaypalService } from './paypal.service';
import { HOST, PAYPAL_API_CLIENT, PAYPAL_API_SECRET } from 'src/config';
import axios from 'axios';
import { Response } from 'express';

@Controller('paypal')
export class PaypalController {
  constructor(private readonly paypalService: PaypalService) {}

  @Get(':idAuth0/create-order/premiunBronce')
  async createOrderBronce(@Param('idAuth0') idAuth0: string) {
    try {
      const encodedIdAuth0 = encodeURIComponent(idAuth0);
      console.log('Encoded ID:', encodedIdAuth0);

      const order = {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '5',
            },
          },
        ],
        application_context: {
          // Fixed typo in 'application_context'
          brand_name: 'doclinapp',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${HOST}/paypal/${encodedIdAuth0}/capture-order/premiunBronce`,
          cancel_url: `${HOST}/paypal/cancel-order`,
        },
      };

      // Get access token
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');

      const {
        data: { access_token },
      } = await axios.post(
        `https://api-m.sandbox.paypal.com/v1/oauth2/token`,
        params,
        {
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      console.log(access_token);

      // Create order
      const { data: orderData } = await axios.post(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(orderData);

      return orderData;
    } catch (error) {
      console.error('PayPal API Error:', error.response?.data || error.message);
      throw error;
    }
  }

  @Get(':idAuth0/create-order/premiunPlata')
  async createOrderPlata(@Param('idAuth0') idAuth0: string) {
    try {
      const encodedIdAuth0 = encodeURIComponent(idAuth0);
      console.log('Encoded ID:', encodedIdAuth0);

      const order = {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '5',
            },
          },
        ],
        application_context: {
          // Fixed typo in 'application_context'
          brand_name: 'doclinapp',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${HOST}/paypal/${encodedIdAuth0}/capture-order/premiunPlata`,
          cancel_url: `${HOST}/paypal/cancel-order`,
        },
      };

      // Get access token
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');

      const {
        data: { access_token },
      } = await axios.post(
        `https://api-m.sandbox.paypal.com/v1/oauth2/token`,
        params,
        {
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      console.log(access_token);

      // Create order
      const { data: orderData } = await axios.post(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(orderData);

      return orderData;
    } catch (error) {
      console.error('PayPal API Error:', error.response?.data || error.message);
      throw error;
    }
  }

  @Get(':idAuth0/create-order/premiunOro')
  async createOrderOro(@Param('idAuth0') idAuth0: string) {
    try {
      const encodedIdAuth0 = encodeURIComponent(idAuth0);
      console.log('Encoded ID:', encodedIdAuth0);

      const order = {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: '20',
            },
          },
        ],
        application_context: {
          // Fixed typo in 'application_context'
          brand_name: 'doclinapp',
          landing_page: 'NO_PREFERENCE',
          user_action: 'PAY_NOW',
          return_url: `${HOST}/paypal/${encodedIdAuth0}/capture-order/premiunOro`,
          cancel_url: `${HOST}/paypal/cancel-order`,
        },
      };

      // Get access token
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');

      const {
        data: { access_token },
      } = await axios.post(
        `https://api-m.sandbox.paypal.com/v1/oauth2/token`,
        params,
        {
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      console.log(access_token);

      // Create order
      const { data: orderData } = await axios.post(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(orderData);

      return orderData;
    } catch (error) {
      console.error('PayPal API Error:', error.response?.data || error.message);
      throw error;
    }
  }

  @Get(':idAuth0/capture-order/premiunOro')
  async captureOrderOro(
    @Query('token') token: string,
    @Res() res: Response,
    @Param('idAuth0') encodedIdAuth0: string,
  ) {
    if (!token) {
      throw new BadRequestException('Token parameter is required');
    }

    try {
      const originalIdAuth0 = decodeURIComponent(encodedIdAuth0);
      console.log('Original ID:', originalIdAuth0);

      // Primero obtenemos el token de acceso
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');

      const {
        data: { access_token },
      } = await axios.post(
        'https://api-m.sandbox.paypal.com/v1/oauth2/token',
        params,
        {
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      // Capturamos la orden usando el token de acceso
      const respuesta = await axios.post(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`,
        {}, // empty body
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(JSON.stringify(respuesta.data, null, 2));

      if (respuesta.data.status === 'COMPLETED') {
        console.log('id Auth0 original: ' + originalIdAuth0);
        this.paypalService.create(
          originalIdAuth0,
          respuesta.data,
          'Premiun Oro',
        );
        return res.redirect('http://localhost:3000/premiunOro');
      }

      return respuesta.data;
    } catch (error) {
      console.error('PayPal Capture Error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });

      if (error.response?.status === 404) {
        throw new BadRequestException('Order not found');
      }

      if (error.response?.status === 422) {
        throw new BadRequestException(
          'Order already captured or invalid state',
        );
      }

      throw new BadRequestException(
        error.response?.data?.message || 'Failed to capture PayPal order',
      );
    }
  }

  @Get(':idAuth0/capture-order/premiunBronce')
  async captureOrderBronce(
    @Query('token') token: string,
    @Res() res: Response,
    @Param('idAuth0') encodedIdAuth0: string,
  ) {
    if (!token) {
      throw new BadRequestException('Token parameter is required');
    }

    try {
      const originalIdAuth0 = decodeURIComponent(encodedIdAuth0);
      console.log('Original ID:', originalIdAuth0);

      // Primero obtenemos el token de acceso
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');

      const {
        data: { access_token },
      } = await axios.post(
        'https://api-m.sandbox.paypal.com/v1/oauth2/token',
        params,
        {
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      // Capturamos la orden usando el token de acceso
      const respuesta = await axios.post(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`,
        {}, // empty body
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(JSON.stringify(respuesta.data, null, 2));

      if (respuesta.data.status === 'COMPLETED') {
        console.log('id Auth0 original: ' + originalIdAuth0);
        this.paypalService.create(
          originalIdAuth0,
          respuesta.data,
          'Premiun Bronce',
        );
        return res.redirect('http://localhost:3000/premiunBronce');
      }

      return respuesta.data;
    } catch (error) {
      console.error('PayPal Capture Error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });

      if (error.response?.status === 404) {
        throw new BadRequestException('Order not found');
      }

      if (error.response?.status === 422) {
        throw new BadRequestException(
          'Order already captured or invalid state',
        );
      }

      throw new BadRequestException(
        error.response?.data?.message || 'Failed to capture PayPal order',
      );
    }
  }

  @Get(':idAuth0/capture-order/premiunPlata')
  async captureOrderPlata(
    @Query('token') token: string,
    @Res() res: Response,
    @Param('idAuth0') encodedIdAuth0: string,
  ) {
    if (!token) {
      throw new BadRequestException('Token parameter is required');
    }

    try {
      const originalIdAuth0 = decodeURIComponent(encodedIdAuth0);
      console.log('Original ID:', originalIdAuth0);

      // Primero obtenemos el token de acceso
      const params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');

      const {
        data: { access_token },
      } = await axios.post(
        'https://api-m.sandbox.paypal.com/v1/oauth2/token',
        params,
        {
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      );

      // Capturamos la orden usando el token de acceso
      const respuesta = await axios.post(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`,
        {}, // empty body
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(JSON.stringify(respuesta.data, null, 2));

      if (respuesta.data.status === 'COMPLETED') {
        console.log('id Auth0 original: ' + originalIdAuth0);
        this.paypalService.create(
          originalIdAuth0,
          respuesta.data,
          'Premiun Plata',
        );
        return res.redirect('http://localhost:3000/premiunPlata');
      }

      return respuesta.data;
    } catch (error) {
      console.error('PayPal Capture Error:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });

      if (error.response?.status === 404) {
        throw new BadRequestException('Order not found');
      }

      if (error.response?.status === 422) {
        throw new BadRequestException(
          'Order already captured or invalid state',
        );
      }

      throw new BadRequestException(
        error.response?.data?.message || 'Failed to capture PayPal order',
      );
    }
  }

  @Get('/cancel-order')
  cancelarOrden() {
    return 'Cancelado';
  }
}
