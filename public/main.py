import pandas as pd 
df = pd.read_csv('ratings.csv')
movie_titles = pd.read_csv('movies.csv')

df = pd.merge(df, movie_titles, on='movieId')

ratings = pd.DataFrame(df.groupby('title')['rating'].mean())  # (1)

ratings['total_ratings'] = df.groupby('title')['rating'].count()

matrix = df.pivot_table(index='userId', columns='title', values='rating')
matrix.head()

# find the movies that have the most ratings by setting ascending to False, then view top 10
mostRated = ratings.sort_values('total_ratings', ascending=False).head(10)

# New Dataframes showing the userIds' and ratings that were given for both movies.
Forrest_Gump_rating = matrix['Forrest Gump (1994)']
Pulp_Fiction_rating = matrix['Pulp Fiction (1994)']
Jurrassic_Park_rating = matrix['Jurassic Park (1993)']
Braveheart_rating = matrix['Braveheart (1995)']
Schindlers_List_rating = matrix["Schindler's List (1993)"] 

like_Forrest_Gump = matrix.corrwith(Forrest_Gump_rating)

like_Pulp_Fiction = matrix.corrwith(Pulp_Fiction_rating)

# at the top of the list, which shows us that it is the most recommended movie.
correlation_Forrest_Gump = like_Forrest_Gump.sort_values(ascending=False)

# Coffee Town (2013) is the most recommended movies
correlation_Pulp_Fiction = like_Pulp_Fiction.sort_values(ascending=False)


topFive_Forrest = like_Forrest_Gump.sort_values(ascending=False).head(5)

top_Forrest = like_Forrest_Gump.sort_values(ascending=False).head(1)

topFive_Pulp_Fiction = like_Pulp_Fiction.sort_values(ascending=False).head(5)

top_Pulp = like_Pulp_Fiction.sort_values(ascending=False).head(1)

corr_Forrest = pd.DataFrame(correlation_Forrest_Gump, columns=['Correlation'])
corr_Forrest.dropna(inplace=True)

corr_pulp = pd.DataFrame(correlation_Pulp_Fiction, columns=['Correlation'])
corr_pulp.dropna(inplace=True)

corr_Forrest = corr_Forrest.join(ratings['total_ratings'])
corr_pulp = corr_pulp.join(ratings['total_ratings'])

top3_Forrest = corr_Forrest[corr_Forrest['total_ratings'] > 100].sort_values(by='Correlation', 
                                                              ascending=False).head(4)

top3_Pulp = corr_pulp[corr_pulp['total_ratings'] > 100].sort_values(by='Correlation', 
                                                        ascending=False).head(4)

top3_Forrest = top3_Forrest.drop(['Forrest Gump (1994)'])
print('Similar to Forrest Gump: ')
print(top3_Forrest)

top3_Pulp = top3_Pulp.drop(['Pulp Fiction (1994)'])
print('Similar to Pulp Fiction: ')
print(top3_Pulp)

