import './index.css'

const PasswordItem = props => {
  const {passwordItemDetails} = props
  const {
    id,
    initialClassName,
    webSite,
    userName,
    password,
    isChecked,
  } = passwordItemDetails

  const initial = userName ? userName[0].toUpperCase() : ''

  const onDeletePasswordItem = () => {
    const {deletePassword} = props
    deletePassword(id)
  }

  return (
    <li className="password-item-list">
      <div className={initialClassName}>
        <p className="initial">{initial}</p>
      </div>
      <div className="web-user-pass-container">
        <p className="website">{webSite}</p>
        <p className="user-name">{userName}</p>

        {isChecked ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-img"
          />
        ) : (
          <p className="password">{password}</p>
        )}
      </div>
      <div className="delete-button">
        <button
          type="button"
          testid="delete"
          className="delete-button"
          onClick={onDeletePasswordItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-button-img"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
