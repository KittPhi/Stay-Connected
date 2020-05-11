async def main(data):
    print('inside python', data)
    print(data['movie'])
    print(data['rating'])
    film = data['movie']
    # rate = data['rating']
    import app
    import pandas as pd 
    df = pd.read_csv('ratings.csv')
    movie_titles = pd.read_csv('movies.csv')
    df = pd.merge(df, movie_titles, on='movieId')
    ratings = pd.DataFrame(df.groupby('title')['rating'].mean())
    ratings['total_ratings'] = df.groupby('title')['rating'].count()
    matrix = df.pivot_table(index='userId', columns='title', values='rating')
    matrix.head()

    # find the movies that have the most ratings by setting ascending to False, then view top 10
    mostRated = ratings.sort_values('total_ratings', ascending=False).head(10)
    # print(mostRated)
    # New Dataframes showing the userIds' and ratings that were given for both movies.
    movie_rating = matrix[film]

    like_movie = matrix.corrwith(movie_rating)

    # at the top of the list, which shows us that it is the most recommended movie.
    correlation_to_movie = like_movie.sort_values(ascending=False)

    # Coffee Town (2013) is the most recommended movies
    # correlation_Pulp_Fiction = like_Pulp_Fiction.sort_values(ascending=False)
    # topFive_Forrest = like_movie.sort_values(ascending=False).head(5)
    corr_movie = pd.DataFrame(correlation_to_movie, columns=['Correlation'])
    corr_movie.dropna(inplace=True)

    corr_movie = corr_movie.join(ratings['total_ratings'])

    top3_Similar = corr_movie[corr_movie['total_ratings'] > 100].sort_values(by='Correlation', 
                                                                ascending=False).head(4)

    top3_Similar = top3_Similar.drop([film])
    print('Similar to the Movie: ', film)
    print(top3_Similar)

    # top_Similar = corr_movie[corr_movie['total_ratings'] > 100].sort_values(by='Correlation', 
    #                                                             ascending=False).head(2)
    # top_Similar = top_Similar.drop([film])
    # print('Similar to the Movie: ', film)
    # print(top_Similar)
    

    # first = top3_Similar.columns.values[0] # Correlation
    
    # first = top3_Similar.iloc[0]
    # print(first)
    # app.toClient(first)
    
    # second = top3_Similar.iloc[1]
    # print(second, ' third movie')

    # third = top3_Similar.iloc[-1]
    # print(third, ' first movie')
    # return first
