// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, updateState} = props
  const {id, thumbnailUrl, thumbnailText} = eachItem
  const onClickButton = () => {
    updateState(id)
    console.log('button clicked')
  }

  return (
    <li className="list-style">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          className="thumbnailImg"
          alt={thumbnailText}
          onClick={onClickButton}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
