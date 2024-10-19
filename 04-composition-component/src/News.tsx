import Card from './Card';
import Header from './Header';
import { SomeNews } from './NewsData';

const News = (): JSX.Element | string | null => {
	return (
		<div>
			<Header title='Latest News' subtitle='Covering March & April 2022' />
			{/* method 1 - call directly data from index array */}
			{/* 
      <Card
				title={SomeNews[0].title}
				date={SomeNews[0].date}
				content={SomeNews[0].content}
				category={SomeNews[0].category}
				image={SomeNews[0].image}
				link={SomeNews[0].link}
			/>
			<Card
				title={SomeNews[1].title}
				date={SomeNews[1].date}
				content={SomeNews[1].content}
				category={SomeNews[1].category}
				image={SomeNews[1].image}
				link={SomeNews[1].link}
			/>
			<Card
				title={SomeNews[2].title}
				date={SomeNews[2].date}
				content={SomeNews[2].content}
				category={SomeNews[2].category}
				image={SomeNews[2].image}
				link={SomeNews[2].link}
			/>
       */}

			{/* method 2 - iterating data using map */}
			{/*  */}
			{SomeNews.map((newsItem) => (
				<Card key={newsItem.title} {...newsItem} />
			))}
		</div>
	);
};
export default News;
