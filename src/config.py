import os
from dotenv import load_dotenv

load_dotenv('./.env')


TOKEN = os.environ['TOKEN']
BASE_URL = os.environ['BASE_URL']
# CHUNK_SIZE = 1048576