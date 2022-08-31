<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>checkers</title>
  <link rel="stylesheet" href="/css/checkers.css" />
  <script type="text/javascript" src="/js/jquery.js"></script>
</head>

<body>
  <div class="blue" style="display:none">
    <p>B</p>
  </div>
  <div class="green" style="display:none">
    <p>G</p>
  </div>
  <div class="checkers">
    <p>checkers</p>
  </div>
  <table class="board">
    <tr p="1">
      <td class="td1" p="1"></td>
      <td class="td2" align="center" p="2">
        <div class="pawn2"></div>
      </td>
      <td class="td1" p="3"></td>
      <td class="td2" align="center" p="4">
        <div class="pawn2"></div>
      </td>
      <td class="td1" p="5"></td>
      <td class="td2" align="center" p="6">
        <div class="pawn2"></div>
      </td>
      <td class="td1" p="7"></td>
      <td class="td2" align="center" p="8">
        <div class="pawn2"></div>
      </td>
    </tr>

    <tr p="2">
      <td class="td2" align="center" p="1">
        <div class="pawn2"></div>
      </td>
      <td class="td1" p="2"></td>
      <td class="td2" align="center" p="3">
        <div class="pawn2"></div>
      </td>
      <td class="td1" p="4"></td>
      <td class="td2" align="center" p="5">
        <div class="pawn2"></div>
      </td>
      <td class="td1" p="6"></td>
      <td class="td2" align="center" p="7">
        <div class="pawn2"></div>
      </td>
      <td class="td1" p="8"></td>
    </tr>

    <tr p="3">
      <td class="td1" p="1"></td>
      <td class="td2" align="center" p="2">
        <div class="pawn2"></div>
      </td>
      <td class="td1" p="3"></td>
      <td class="td2" align="center" p="4">
        <div class="pawn2"></div>
      </td>
      <td class="td1" p="5"></td>
      <td class="td2" align="center" p="6">
        <div class="pawn2"></div>
      </td>
      <td class="td1" p="7"></td>
      <td class="td2" align="center" p="8">
        <div class="pawn2"></div>
      </td>
    </tr>

    <tr p="4">
      <td class="td2" align="center" p="1"></td>
      <td class="td1" p="2"></td>
      <td class="td2" align="center" p="3"></td>
      <td class="td1" p="4"></td>
      <td class="td2" align="center" p="5"></td>
      <td class="td1" p="6"></td>
      <td class="td2" align="center" p="7"></td>
      <td class="td1" p="8"></td>
    </tr>

    <tr p="5">
      <td class="td1" p="1"></td>
      <td class="td2" align="center" p="2"></td>
      <td class="td1" p="3"></td>
      <td class="td2" align="center" p="4"></td>
      <td class="td1" p="5"></td>
      <td class="td2" align="center" p="6"></td>
      <td class="td1" p="7"></td>
      <td class="td2" align="center" p="8"></td>
    </tr>

    <tr p="6">
      <td class="td2" align="center" p="1">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="2"></td>
      <td class="td2" align="center" p="3">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="4"></td>
      <td class="td2" align="center" p="5">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="6"></td>
      <td class="td2" align="center" p="7">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="8"></td>
    </tr>

    <tr p="7">
      <td class="td1" p="1"></td>
      <td class="td2" align="center" p="2">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="3"></td>
      <td class="td2" align="center" p="4">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="5"></td>
      <td class="td2" align="center" p="6">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="7"></td>
      <td class="td2" align="center" p="8">
        <div class="pawn1"></div>
      </td>
    </tr>

    <tr p="8">
      <td class="td2" align="center" p="1">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="2"></td>
      <td class="td2" align="center" p="3">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="4"></td>
      <td class="td2" align="center" p="5">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="6"></td>
      <td class="td2" align="center" p="7">
        <div class="pawn1"></div>
      </td>
      <td class="td1" p="8"></td>
    </tr>
  </table>

  <div class="shadow"><input type="button" class="start" value="start"></div>

  <div class="win hide">
    <div></div>
  </div>

  <script type="text/javascript" src="/js/checkers.js"></script>

</body>

</html>