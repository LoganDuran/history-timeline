import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { TextControl } from "@wordpress/components";
import "./editor.scss";

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
						<div className="textbubble">
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
						<div className="point"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Edit;
