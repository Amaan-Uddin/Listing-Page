import { Routes, Route } from 'react-router-dom'
import AddPost from './components/main/AddPost'
import Listing from './components/main/Listing'
import MediaPlayer from './components/main/MediaPlayer'
import NotFound from './components/main/NotFound'

function App() {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<Listing />}></Route>
				<Route path="add-post" element={<AddPost />}></Route>
				<Route path="play-video/:id" element={<MediaPlayer />}></Route>
				<Route path="*" element={<NotFound />}></Route>
			</Route>
		</Routes>
	)
}
export default App
