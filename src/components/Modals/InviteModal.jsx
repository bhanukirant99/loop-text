
import {InviteCard} from '../'
export const InviteModal = ({headerText}) => {
  return (
    <div className="modal  flex flex-col justify-center ">
       <p className="text-white text-center text-2xl mb-4">{headerText}</p>
      <InviteCard  userName="Maddy"/>
      <InviteCard  userName="Maddy"/>
      <InviteCard  userName="Maddy"/>
      <InviteCard  userName="Maddy"/>
      <InviteCard  userName="Maddy"/>
    </div>
  );
};
