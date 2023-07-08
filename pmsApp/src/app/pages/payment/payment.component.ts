import { Component, HostListener } from '@angular/core';
import { PaymentService } from 'src/app/services/payment.service';



declare var Razorpay:any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {

  formData:any={
    customerName:'',
    email:'',
    phoneNumber:'',
    amount:''
  };
constructor(private payment:PaymentService){
  
}

  message:any = "Not yet stared";
  paymentId = "";
  error = "";
  title = 'angular-razorpay-intergration';
  options = {
    "key": "",
    "amount": "",
    "name": "",
    "description": "Web Development",
    "order_id": "",
    "handler": function (response: any) {
      var event = new CustomEvent("payment.success",
        {
          detail: response,
          bubbles: true,
          cancelable: true
        }
      );
      window.dispatchEvent(event);
    },
    "prefill": {
      "name": "",
      "email": "",
      "contact": ""
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  payNow() {
    this.paymentId = '';
    this.error = '';
    this.payment.createOrder(this.formData).subscribe(
      (data)=>{
        console.log(data);
        this.options.key=data.secretId;
        this.options.order_id = data.razorpayOrderId;
        this.options.prefill.name = this.formData.name;
        this.options.prefill.email = this.formData.email;
        this.options.prefill.contact = this.formData.phoneNumber;
        this.options.amount=this.formData.amount;
      
      var rzp1=new Razorpay(this.options);
      rzp1.open();
      rzp1.on('payment.failed', function (response: any) {
        //this.message = "Payment Failed";
        // Todo - store this information in the server
        console.log(response.error.code);
        console.log(response.error.description);
        console.log(response.error.source);
        console.log(response.error.step);
        console.log(response.error.reason);
        console.log(response.error.metadata.order_id);
        console.log(response.error.metadata.payment_id);
        //this.error = response.error.reason;
      }
      );
    },
    );
  }




   /* this.options.amount = "200"; //paise
    this.options.prefill.name = "Abcd";
    this.options.prefill.email = "abcd@gmail.com";
    this.options.prefill.contact = "9999999999";
    var rzp1 = new Razorpay(this.options);
    rzp1.open();*/

  @HostListener('window:payment.success', ['$event'])
  onPaymentSuccess(event: any): void {
    this.message = "Success Payment";
  }
}
