import { Button } from "..";
import "./modal.css";
import { InviteCard } from "../../Components/InviteCard/InviteCard";

export const AudienceModal = ({msg}) => {
    return (
        <div id="audience-modal" className="stage-modal flex flex-col">
          <a
            href="#close"
            className=" fixed right-4 top-4"
            title="Close"
          >
            <span className="material-icons-round text-white hover:text-red-500">
              close
            </span>
          </a>
          <p className="text-white text-center text-2xl mt-8 mb-6">Audience</p>
          <InviteCard userName="Maddy" buttonText="+ Stage"/>
          <InviteCard userName="Maddy" buttonText="+ Stage"/>
          <InviteCard userName="Maddy" buttonText="+ Stage"/>
          <InviteCard userName="Maddy" buttonText="+ Stage"/>
          <InviteCard userName="Maddy" buttonText="+ Stage"/>
        </div>
    )
}

