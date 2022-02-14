#!/usr/bin/env python
import json

import requests
from requests.exceptions import HTTPError

from src.config import *

# Import developed modules 
from src.upload import *


def test_create_article():
    response = create_article('New Article')       
    location_key_exists = 'location' in response

    # Check that location is within the response dict keys
    assert location_key_exists


