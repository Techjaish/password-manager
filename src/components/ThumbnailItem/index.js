// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachItem, updateState} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachItem
  const onClickButton = () => {
    updateState(id)
    console.log('button clicked')
  }

  return (
    <li className="list-style">
      <button className="button" type="button" onClick={onClickButton}>
        <img
          src={thumbnailUrl}
          className="thumbnailImg"
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
