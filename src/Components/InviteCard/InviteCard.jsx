import { Button } from "..";
export const InviteCard = ({ userName }) => {
  return (
    <div className="invite-content border p-3 w-100">
      <div className="invite-card  flex flex-row justify-evenly items-center">
        <span className="material-icons text-4xl">account_circle</span>
        <p className=" text-1xl text-black">{userName}</p>
        <Button
          primary="bg-blue-500 text-white w-2/5 h-10 text-1xl "
          text="+ STAGE"
        />
      </div>
    </div>
  );
};
