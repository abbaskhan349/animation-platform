"use client";
import * as React from "react";

/**
 * ClientsSection component displays a list of client logos with a heading
 */
function ClientsSection() {
  return (
    <section className="mt-36 max-w-full w-[1100px] max-md:mt-10">
      <h2 className="text-xl font-medium tracking-tight leading-tight text-center text-stone-300 max-md:max-w-full">
        Our Clients
      </h2>
      <div className="flex gap-10 justify-center items-center mt-7 w-full max-md:flex-wrap max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/2d70ccb1c06ffae0366362b2a33fab698b266d06e722f6f20172ed15d236d9ae?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto w-44 aspect-[4.41]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/a5afe2c6fc1c18fd8ccdfea3892e5cd6fefd012825085b0ed25db66162f00711?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/7770b1532233be2b6ce59ad04dfb8852a2b046cd78f5b1b772a0b46c2209b831?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[5.05] w-[202px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/af41fbc626973a29df20020ce11fe98b0457c08cecfeff7b4386b98ec493d4a9?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/df92fb066d6c240bad715b307a50adf893d59a32275ab259b4f9e823e110ad08?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[2.6] w-[104px]"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8a4a7cd90a3e48bfb588491d983b4510/50c05029a65afdef8e233ebe3055eff9deaaf63f5311c47dadbf8dd825016dfb?placeholderIfAbsent=true"
          alt="Client logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.18] w-[52px]"
        />
      </div>
    </section>
  );
}

export default ClientsSection;
