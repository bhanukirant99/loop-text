import { UserCard } from "./UserCard";

export const Stage = ({ iconName, text }) => {
  return (
    <div className="flex flex-col items-center  w-72 py-5 border h-screen ">
      <span className="text-2xl">{iconName}</span>
      <p className="text-4xl pb-5">{text}</p>
      <UserCard userName="Maddy" />
      <UserCard userName="Maddy" />
      <UserCard userName="Maddy" />
    </div>
  );
};
