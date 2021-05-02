import { Button } from "..";
export const Notification = ({ roomText, nameText }) => {
  return (
    <div className="notification flex flex-row justify-center">
      <div className="notification-card border p-3 m-5">
        <div className="notification-content">
          <p>{`You are invited to Room ${roomText} By ${nameText}`}</p>
        </div>
        <div className="notification-actions flex flex-row justify-end mt-2">
          <Button
            primary="bg-green-500 text-white w-1/5 h-10 text-1xl mx-3"
            text="Accept"
          />
          <Button
            primary="bg-red-500 text-white w-1/5 h-10 text-1xl "
            text="Deny"
          />
        </div>
      </div>
    </div>
  );
};
