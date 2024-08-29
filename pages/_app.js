import {useState, useEffect} from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@components/layout/Layout"
import theme from "@components/Theme"
import '../styles/globals.css'
import '../styles/animations.css'
import 'animate.css';

function MyApp({ Component, pageProps }) {
	const [hydrated,setHydrated] = useState(false)

	useEffect(()=>{
	
		setHydrated(true)
	
	})
	return hydrated && (
		<ChakraProvider theme={theme} >
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}
export default MyApp