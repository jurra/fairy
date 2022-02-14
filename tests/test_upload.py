from dotenv import load_dotenv
from src.upload import *

load_dotenv('./')

# def test_hello_world():
#     assert say_hello() == "Hello World!"

def test_create_article():
    pass

     
def test_upload():
    pass
    # Check that a file has been added to the article
    # Assert that upload(file) returns a succesfull response
    # assert upload(./fixtures/file1) == 200
    # assert upload(./fixtures/file2) == 404
    # assert upload(./fixtures/file3) == 409
     
    # Experiment: Upload an article without files, and check that the article with that name is created 