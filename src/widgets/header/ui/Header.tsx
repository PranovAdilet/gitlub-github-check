"use client";
import { Form } from "@/features/form";
import { Button } from "@/shared/ui";
import { showModal } from "@/widgets/modal";

const Header = () => {
   const handleClick = () => {
      showModal("");
   };

   return (
      <div>
         <Button onClick={handleClick} className="btn_bordered" imgName="like">
            Кнопочка
         </Button>
         <Form />
      </div>
   );
};

export default Header;
