import './index.css'

const ThumbnailItem = props => {
  const {data, changeHomeImage, selectImageCheck} = props
  const {id, thumbnailUrl, thumbnailAltText} = data
  const imageShift = () => {
    changeHomeImage(id)
  }
  const selectedImageClassName = selectImageCheck ? 'highlight-image' : ''
  return (
    <li>
      <button type="button" className="thumbnail" onClick={imageShift}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${selectedImageClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
