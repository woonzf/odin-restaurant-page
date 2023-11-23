// Functions
import { createImg, createText, createClassDivAndAppend } from "./function";

// Image
import img from '../images/patrick-schneider-5xltWMpkN3E-unsplash.jpg';
import imgLocation from '../images/location.png';
import imgPhone from '../images/telephone.png';
import imgMail from '../images/mail.png';
import imgClock from '../images/clock.png';

const contact = (() => {
    function createContent() {
        return [createContact()];
    }

    function createContact() {
        const image = createImg(img, "Grey and black light bulbs during night time");
        
        const location = createItemInfo(imgLocation, "Location Icon", "207 ABC Street Orange Bank, AZ 07701");
        const phone = createItemInfo(imgPhone, "Phone Icon", "345 012 6789");
        const email = createItemInfo(imgMail, "Mail Icon", "info@soulkitchen.com");
        const time = createItemInfo(imgClock, "Clock Icon", "Monday ~ Saturday", "Sunday: Closed");

        const info = createClassDivAndAppend("info", location, phone, email, time);
        return createClassDivAndAppend("contact", image, info);
    }

    function createItemInfo(image, alt, ...text) {
        const img = createImg(image, alt);

        const textList = document.createElement("div");
        textList.classList.add("list");
        for (const el of [...text]) textList.append(createText(el));
        
        return createClassDivAndAppend("item", img, textList);
    }

    return { createContent };
})()

export { contact }
