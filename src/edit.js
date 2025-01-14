/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import { TextControl } from "@wordpress/components";


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
const Edit = (props) => {
	const blockProps = useBlockProps();
	const { attributes, setAttributes } = props;
	const { timelineData } = attributes;
  
	const updateTimelineData = (index, field, value) => {
	  const newTimelineData = [...timelineData];
	  newTimelineData[index][field] = value;
	  setAttributes({ timelineData: newTimelineData });
	};
  
	return (
	  <div {...blockProps}>
		<div className="timeline">
		  {timelineData.map((item, index) => (
			<div className="content" key={index}>
			  <TextControl
				placeholder="year"
				value={item.year}
				onChange={(value) => updateTimelineData(index, "year", value)}
			  />
			  <TextControl
				placeholder="event"
				value={item.event}
				onChange={(value) => updateTimelineData(index, "event", value)}
			  />
			</div>
		  ))}
		</div>
	  </div>
	);
  };
  
  export default Edit;