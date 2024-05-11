import pandas as pd
df= pd.read_csv('2023-autumn.csv')
df.drop('Хичээлийн_дугаар', axis=1)
print(df)
