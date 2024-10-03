/* eslint-disable @next/next/no-img-element */
export default function ContactImage() {
    return (
        <div className="w-full h-full bg-black max-md:hidden relative">
           <img src="/images/contact2.jpg" alt="contact image" className="h-full object-cover w-full aspect-square" />
        </div>
    );
}