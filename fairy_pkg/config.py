import os
from dotenv import load_dotenv

load_dotenv('./.env')

# TODO: Fix this later 
load_dotenv('./.env.dev')


TOKEN = os.environ['TOKEN']
BASE_URL = os.environ['BASE_URL']

# Dev environment variables
ARTICLE_ID = os.environ['ARTICLE_ID']
CHUNK_SIZE = 1048576
