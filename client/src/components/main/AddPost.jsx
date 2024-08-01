import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import ErrorMessage from '@/components/utils/ErrorMessage'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import apiServices from '@/services/apiServices'

function AddPost() {
	const {
		register,
		handleSubmit,
		setError,
		clearErrors,
		formState: { errors },
	} = useForm()
	const navigate = useNavigate()
	async function uploadData(data) {
		try {
			const formData = new FormData()
			formData.set('title', data.title)
			formData.set('description', data.description)
			formData.set('thumbnail', data.thumbnail[0])
			formData.set('video', data.video[0])

			await apiServices.uploadPost(formData)
			navigate('/')
		} catch (error) {
			console.log(error.message)
			if (error.field) {
				setError(error.field, { type: 'manual', message: error.message })
			} else {
				setError('server', { type: 'server', message: error.message })
			}
		}
	}
	return (
		<div className="w-full flex justify-center h-screen items-center mx-2 sm:mx-0">
			<form className="flex flex-col w-full max-w-md gap-2" onSubmit={handleSubmit(uploadData)}>
				{errors.server && (
					<div className="p-2 bg-red-200">
						<ErrorMessage>{errors.server.message}</ErrorMessage>
					</div>
				)}
				<div className="flex flex-col items-start">
					<Label htmlFor="title">Title</Label>
					<Input
						type="text"
						placeholder="Enter title..."
						maxLength="50"
						{...register('title', { required: 'Title is required', onChange: () => clearErrors('server') })}
					/>
					{errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
				</div>
				<div className="flex flex-col items-start">
					<Label htmlFor="description">Description</Label>
					<Textarea
						placeholder="Enter description..."
						maxLength="200"
						rows="4"
						{...register('description', {
							required: 'Description is required',
							onChange: () => clearErrors('server'),
						})}
					/>
					{errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
				</div>
				<div className="flex flex-col items-start">
					<Label htmlFor="thumbnail">Thumbnail</Label>
					<Input
						type="file"
						accept="image/png,image/jpeg"
						{...register('thumbnail', {
							required: 'Thumbnail is required',
							onChange: () => clearErrors('server'),
						})}
					/>
					{errors.thumbnail && <ErrorMessage>{errors.thumbnail.message}</ErrorMessage>}
				</div>
				<div className="flex flex-col items-start">
					<Label htmlFor="video">Video</Label>
					<Input
						type="file"
						accept="video/mp4,video/mpg,video/avi"
						{...register('video', { required: 'Video is required', onChange: () => clearErrors('server') })}
					/>
					{errors.video && <ErrorMessage>{errors.video.message}</ErrorMessage>}
				</div>
				<Button type="submit">Post</Button>
			</form>
		</div>
	)
}

export default AddPost
