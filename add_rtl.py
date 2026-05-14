import os

def add_rtl_button():
    target = '<div class="nav-actions">'
    replacement = '<div class="nav-actions">\n                <button id="rtl-toggle" class="btn btn-outline"><i class="ri-translate-2"></i> RTL</button>'
    
    files = [f for f in os.listdir('.') if f.endswith('.html')]
    
    for file in files:
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if target in content and 'id="rtl-toggle"' not in content:
            new_content = content.replace(target, replacement)
            with open(file, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {file}")

if __name__ == "__main__":
    add_rtl_button()
