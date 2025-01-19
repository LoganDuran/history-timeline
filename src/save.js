import { useBlockProps } from "@wordpress/block-editor";

const Save = (props) => {
	const blockProps = useBlockProps.save();
	const { timelineData } = props.attributes;

	return (
		<div {...blockProps}>
			<div className="timeline">
				{timelineData.map((item, index) => (
					<div className="content" key={index}>
						<div className="textbubble">
							<span className="yearData">{item.year}</span>
							<span className="eventData">{item.event}</span>
						</div>

						<div className="point"></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Save;
