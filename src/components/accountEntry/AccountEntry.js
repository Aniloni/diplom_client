import './AccountEntry.scss'

const AccountEntry = function(){
    return (
        <div className="accountEntry">
            <p className='account'>Учетная запись {}</p>
            <p className='exit'>Выйти</p>
        </div>
    )
}

export default AccountEntry;