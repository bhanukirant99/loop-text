import {UserCard} from './UserCard'

export const Stage = ({iconName,text}) => {
    return (
        <div>
            <span className='text-2xl'>{iconName}</span>
            <p>{text}</p>
            <UserCard userName="Maddy"/>
            <UserCard userName="Maddy"/>
            <UserCard userName="Maddy"/>
        </div>
    )
}
