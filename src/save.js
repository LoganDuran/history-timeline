/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
const Save = (props) => {
	const blockProps = useBlockProps.save();
	const { timelineData } = props.attributes;
  
	return (
	  <div {...blockProps}>
		<div className="timeline">
		  {timelineData.map((item, index) => (
			<div className="content" key={index}>
			  <span className="yearData">{item.year}</span>
			  <span className="eventData">{item.event}</span>
			</div>
		  ))}
		</div>
	  </div>
	);
  };
  
  export default Save;