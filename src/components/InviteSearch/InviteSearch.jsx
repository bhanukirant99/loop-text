import {InviteCard} from '../'
export const InviteSearch = () => {
  return (
      <>
    <div className="invite-search border p-3 mt-10 m-2 flex flex-row justify-center">
      <input type="search" placeholder="Search Audience" className='outline-none w-full'/>
     <span className="material-icons">search</span>
    
    </div>
    <InviteCard userName="Maddy"/>
    <InviteCard userName="Mangal"/>
    <InviteCard userName="Madhu"/>
    <InviteCard userName="Madan"/>
    </>
  );
};
