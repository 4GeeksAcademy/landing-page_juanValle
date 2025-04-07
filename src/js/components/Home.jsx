import React from "react";
import Card from "./Card";
import NavBar from "./NavBar";
import Tarjet from "./Tarjet";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<NavBar className="mb-5 "
			nameExchange1="Binance"
			urlExchange1="https://accounts.binance.com/en/register?ref=Y5527QF8&gad_source=1&gclid=Cj0KCQjw782_BhDjARIsABTv_JCD-mGRvTrQZrTo18Lsp14KhNHo2pLDkBf23gmNdrphU2aOpDLDMSUaAopYEALw_wcB"
			nameExchange2="Kucoin"
			urlExchange2="https://www.kucoin.com/es"
			nameExchange3="Kraken"
			urlExchange3="https://www.kraken.com/"
			
			/>

			<Tarjet className="d-flex mt-5"
			subtitle="The new era about Blockchain"
			content2="Blockchain es una tecnología revolucionaria que funciona como un libro de contabilidad digital, compartido y descentralizado. 
			Registra transacciones de forma segura y transparente en bloques enlazados cronológicamente, lo que dificulta su alteración y garantiza la confianza sin necesidad de intermediarios."
			/>

			<div className="d-flex my-4">
			<Card
			title="CryptoPunks"
			imageUrl="https://assets.coingecko.com/nft_contracts/images/270/cryptopunks-banner.png?1708416251" 
			content="CryptoPunks (PUNK) es una colección NFT. El precio base de CryptoPunks (PUNK) hoy es de 63.402 $, con un volumen de venta en 24 horas de 291,34 ETH." 
			linkUrl="https://www.coingecko.com/es/nft/cryptopunks"  />	
			<Card 
			title=" Bored Ape Yacht Club" 
			imageUrl="https://assets.coingecko.com/nft_contracts/images/104/mutant-ape-yacht-club-banner.png?1708416159" 
			content="Bored Ape Yacht Club (BAYC) es una colección NFT. El precio base de Bored Ape Yacht Club (BAYC) hoy es de 20.293 $, con un volumen de venta en 24 horas de 192,09 ETH. " 
			linkUrl="https://www.coingecko.com/es/nft/bored-ape-yacht-club"  />	
			<Card 
			title="Pudgy Penguins" 
			imageUrl="https://assets.coingecko.com/nft_contracts/images/38/pudgy-penguins-banner.jpg?1730778702" 
			content="Pudgy Penguins (PPG) es una colección NFT. El precio base de Pudgy Penguins (PPG) hoy es de 13.169,57 $, con un volumen de venta en 24 horas de 319,82 ETH." 
			linkUrl="https://www.coingecko.com/es/nft/pudgy-penguins"  />	
			<Card 
			title="Neo Tokyo Citizen V2" 
			imageUrl="https://assets.coingecko.com/nft_contracts/images/3393/neo-tokyo-citizens-banner.png?1708422932" 
			content="Neo Tokyo Citizen V2 (NTCTZN) es una colección NFT. El precio base de Neo Tokyo Citizen V2 (NTCTZN) hoy es de 5.147,18 $, con un volumen de venta en 24 horas de 6,44 ETH." 
			linkUrl="https://www.coingecko.com/es/nft/neo-tokyo-citizens"  />	

			</div>
		</div>
	);
};

export default Home;