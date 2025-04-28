def to_camel_case(text):
    text = text.replace("-", "_")
    words = text.split("_")
    
    result = [words[0]]
    
    for index in range(1, len(words)):
        result.append(words[index].capitalize())
    
    return "".join(result)
    
def word_search(query, seq):

    res = []
    query = query.lower()

    for word in seq:
        if query in word.lower():
            res.append(word)
    
    if res == []:
        return ["None"]
    
    return res
            
        
def is_pangram(st):
    
    alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    
    st = st.upper()
    for char in alphabet:
        if char not in st:
            return False
    
    return True