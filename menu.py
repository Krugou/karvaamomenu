import requests
from bs4 import BeautifulSoup

def fetch_menu():
    url = 'https://cgi.ravintolapalvelut.iss.fi/ravintola'
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    menu_items = []

    for day_section in soup.select('.lunch-menu__day'):
        day = day_section.select_one('h2.collapsible-title')
        paragraphs = day_section.select('p')

        day_name = day.get_text(strip=True) if day else 'Unknown day'
        items = [p.get_text(strip=True) for p in paragraphs if p.get_text(strip=True)]

        menu_items.append({
            'day': day_name,
            'items': items
        })

    print(menu_items)

fetch_menu()