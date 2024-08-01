function Image({ src }) {
	return (
		<div className="w-72 h-44">
			<img
				src={src}
				alt="thumbnail"
				className=" border shadow-sm sha rounded-lg object-cover h-full w-full block cursor-pointer bg-gray-100"
			/>
		</div>
	)
}
export default Image
