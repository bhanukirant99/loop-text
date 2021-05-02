import { Button } from "..";
export const InviteCard = ({ userName, buttonText }) => {
  return (
    <div className="border p-3 w-50 bg-gray-50 mx-4 flex">

      <div className="user-card flex flex-row justify-between items-center mb-5 w-full">
        
        <div className="flex">
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14Gi8LbjtwKwl1BlXpDNiS4sJf0Do2Mcm7eqGxZa-XA=s96-c"
          alt=""
          className="rounded-full h-12 w-12 mr-2"
        />
        <div className="text-lg text-black">{userName}</div>
        </div>
       

        <Button
          primary="bg-blue-500 text-white w-2/5 h-10 text-1xl "
          text={buttonText}
        />
      </div>
    </div>
  );
};
