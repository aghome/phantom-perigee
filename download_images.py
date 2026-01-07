
import os
import time
import urllib.request
import ssl

# Bypass SSL verification if needed (for some simple scripts)
ssl._create_default_https_context = ssl._create_unverified_context

properties = [
    {
        "id": "411047",
        "images": [
            "https://nagano-akiyabank.jp/img/bukken/9001/411047-MkMrTIkmcN.jpg", # Main
            "https://nagano-akiyabank.jp/img/bukken/9001/411047-7668IHXeWV.jpg",
            "https://nagano-akiyabank.jp/img/bukken/9001/411047-alOz62OuSN.jpg"
        ]
    },
    {
        "id": "367741",
        "images": [
            "https://nagano-akiyabank.jp/img/bukken/9001/367741-ASZadJhUjW.jpg", # Main
            "https://nagano-akiyabank.jp/img/bukken/9001/367741-Bs58OAbWli.jpg",
            "https://nagano-akiyabank.jp/img/bukken/9001/367741-2ymFyKaiGx.jpg",
            "https://nagano-akiyabank.jp/img/bukken/9001/367741-x6eJES3ws7.jpg"
        ]
    },
    {
        "id": "368537",
        "images": [
            "https://nagano-akiyabank.jp/img/bukken/9001/368537-XvaAPaNaH4.jpg", # Main
            "https://nagano-akiyabank.jp/img/bukken/9001/368537-p3IpjHRsQI.jpg",
            "https://nagano-akiyabank.jp/img/bukken/9001/368537-9HKqd1WOsj.jpg",
            "https://nagano-akiyabank.jp/img/bukken/9001/368537-UeWYmcyW9J.jpg"
        ]
    },
    {
        "id": "418879",
        "images": [
             "https://nagano-akiyabank.jp/img/bukken/9001/418879-6O1FPlpz47.jpg", # Main
             "https://nagano-akiyabank.jp/img/bukken/9001/418879-XhOoq2CYNl.jpg",
             "https://nagano-akiyabank.jp/img/bukken/9001/418879-IHagNHCHGx.jpg"
        ]
    }
]

base_dir = "css/images/properties/real"

for prop in properties:
    prop_dir = os.path.join(base_dir, prop["id"])
    os.makedirs(prop_dir, exist_ok=True)
    
    print(f"Downloading images for property {prop['id']}...")
    
    for i, url in enumerate(prop["images"]):
        filename = f"{i+1}.jpg"
        filepath = os.path.join(prop_dir, filename)
        
        try:
            print(f"  Downloading {url} to {filepath}...")
            urllib.request.urlretrieve(url, filepath)
            time.sleep(0.5) # Be polite
        except Exception as e:
            print(f"  Failed to download {url}: {e}")

print("Download complete.")
