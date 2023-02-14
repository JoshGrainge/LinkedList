function linkedList() {
  let _head = null;

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };

  function append(val) {
    if (_head == null) _head = node(val, null);
    else {
      _head = node(val, _head);
    }
  }

  function prepend(val) {
    _head = node(val, _head);
  }

  function size() {
    let curr = _head;
    let index = 0;
    while (curr) {
      curr = curr.next;
      index++;
    }

    return index;
  }

  function head() {
    return _head;
  }

  function tail() {
    let curr = _head;
    let prev = curr;
    while (curr) {
      prev = curr;
      curr = curr.next;
    }

    return prev;
  }

  function at(index) {
    let curr = _head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
      if (curr == null) return null;
    }

    return curr;
  }

  function pop() {
    let curr = _head;
    let prev = null;
    if (curr == null) return;

    while (curr) {
      if (curr.next) prev = curr;
      else prev.next = null;

      curr = curr.next;
    }
  }

  function contains(val) {
    let curr = _head;
    while (curr) {
      if (curr.val == val) return true;
      curr = curr.next;
    }

    return false;
  }

  function find(val) {
    let index = 0;
    let curr = _head;
    while (curr) {
      if (curr.val == val) return index;

      index++;
      curr = curr.next;
    }

    return null;
  }

  function toString() {
    let curr = _head;
    let s = "";
    while (curr) {
      s += `( ${curr.val} ) -> `;
      curr = curr.next;
    }

    s += " null";

    return s;
  }

  function insertAt(val, index) {
    let curr = _head;
    let prev;
    for (let i = 0; i < index; i++) {
      if (curr == null) return;

      prev = curr;
      curr = curr.next;
    }

    prev.next = node(val, curr);
  }

  function removeAt(index) {
    let curr = _head;
    let prev;
    for (let i = 0; i < index; i++) {
      if (curr == null) return;

      prev = curr;
      curr = curr.next;
    }

    prev.next = curr.next;
  }
}

function node(_val, _next) {
  return {
    val: _val,
    next: _next,
  };
}
