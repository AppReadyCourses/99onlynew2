import React from "react";

const HowToBuy = () => {
  return (
    <div className="p-2">
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          1. What payment method you are using and how to pay?
        </div>
        <div className="collapse-content">
          <p>
            As for now, we only accept Paypal, to complete the transaction, kindly
            click the "buy now" button and proceed to check out, please follow the instruction Paypal provides.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          2. How to verify the transaction?
        </div>
        <div className="collapse-content">
          <p>
            After the payment is completed, please message us in our Instagrmn account for
            order comfirmation.(Please provide the transaction number or any e-receipt for our
            order verifaction.)
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          3. How to retrive the content I just purchased?
        </div>
        <div className="collapse-content">
          <p>Once we verify the transaction, I will send you the download link of the entire course through our Instagram account messenger. </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          4.What if I didn't receive the content?
        </div>
        <div className="collapse-content">
          <p>For any concerns and questions, feel free to message me any time! Instagram: , E-mail: appreadycourses@gmail.com  </p>
        </div>
      </div>
    </div>
  );
};

export default HowToBuy;
